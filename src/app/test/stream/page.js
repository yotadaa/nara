'use client';

import { useEffect, useState } from 'react';

export default function StreamTestPage() {
    const [responses, setResponses] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleStartStream = async () => {
        setResponses([]);
        setLoading(true);

        const res = await fetch('/api/stream');
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');

            // Keep the last (possibly incomplete) line in buffer
            buffer = lines.pop();

            for (const line of lines) {
                if (line.trim()) {
                    try {
                        const obj = JSON.parse(line);
                        setResponses(prev => [...prev, obj]);
                    } catch (err) {
                        console.error('Failed to parse line:', line);
                    }
                }
            }
        }

        setLoading(false);
    };

    return (
        <div className="p-6 font-sans">
            <h1 className="text-2xl font-bold mb-4">Streaming GPT Results</h1>
            <button
                onClick={handleStartStream}
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? 'Loading...' : 'Start Stream'}
            </button>

            <div className="mt-6 space-y-4">
                {responses.map((item, index) => (
                    <div key={index} className="border p-4 rounded shadow">
                        <p><strong>Q{item.part}:</strong> {item.question}</p>
                        <p><strong>A:</strong> {item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

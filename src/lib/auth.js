import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ALGORITHM = process.env.JWT_ALGORITHM || "HS256";

export function generateJWT(payload) {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: '24h',
        algorithm: 'HS256'
    });
}

export function verifyJWT(token) {
    return jwt.verify(token, JWT_SECRET, {
        algorithms: ['HS256']
    });
}


export async function isLogin() {
    const cookieStore = await cookies(); // HARUS pakai await
    const accessToken = cookieStore.get("access_token")?.value;

    if (!accessToken) {
        return null;
    }


    const payload = jwt.verify(accessToken, JWT_SECRET, { algorithms: [JWT_ALGORITHM] });
    return payload;
}
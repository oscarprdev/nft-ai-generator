import { config } from 'dotenv';

config();

export const CLOUDFLARE_STABLE_DIFFUSION_URL = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`;
export const CLOUDFLARE_BEARER_TOKEN = process.env.CLOUDFLARE_BEARER_TOKEN || '';
export const S3_API_URL = process.env.S3_API_URL || '';
export const PUBLIC_R2_URL = process.env.PUBLIC_R2_URL || '';
export const S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID || '';
export const S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY || '';
export const APP_API_URL = process.env.APP_API_URL || '';

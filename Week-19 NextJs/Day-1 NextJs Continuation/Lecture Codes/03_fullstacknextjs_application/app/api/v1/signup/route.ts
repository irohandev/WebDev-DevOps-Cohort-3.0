import { NextRequest, NextResponse } from 'next/server';
import { Prisma, PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export async function POST(req: NextRequest) {
    const data = await req.json();

    try {
        await prismaClient.user.create({
            data: {
                username: data.username,
                password: data.password
            }
        });

        return NextResponse.json({
            message: "You have signed up"
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({
            message: "Failed to sign up",
        }, { status: 500 });
    }
}


export async function GET() {
    const user = await prismaClient.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}
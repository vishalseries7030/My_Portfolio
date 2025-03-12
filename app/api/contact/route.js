import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL, // तुम्हें खुद को email मिलेगी
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        return Response.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        return Response.json({ message: "Error sending email", error }, { status: 500 });
    }
}

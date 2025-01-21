import { z, ZodEffects, ZodError } from "zod";


export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);


const ageSchema = z.number().min(18).max(100).int();

const userAge = 33;

try {
    const parseUserAge = ageSchema.parse(userAge);
    const { data, error, success } = ageSchema.safeParse(userAge);

    console.log(success);
}
catch(error) {
    if(error instanceof ZodError) {
        console.log(error.issues[0].message);
    }
    else {
        console.log(`Unexpected Error: ${error}`);
    }
}
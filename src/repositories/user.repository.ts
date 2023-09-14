import { User } from "protocols";
import db from "../database/database"


export async function Read() {
    return await db.query<User>(`SELECT * FROM users`)
} 

export async function Create (name :string, email:string, password:string) {
    return await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, password]);
}
    
export async function Update(name :string, email:string, password:string, id: number) {
    return await db.query(`UPDATE produtos SET (name, email, password) WHERE id= $5;`)
}

export async function Delete(id: number) {
    return await db.query(`DELETE * FROM users WHERE id = $1`, [id])
}

export const userRepository = {Create, Read, Update, Delete}
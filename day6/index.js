import { readFile, writeFile } from "./readAndWrite.js";
const FILE = "./users.json";
const register = async (data) => {
    const fileData = await readFile(FILE);
    const updatedData = [];

    if (fileData.length === 0) updatedData = [{ id: 1, ...data }];
    else updatedData = [...fileData, { id: fileData.length + 1, ...data }];

    const response = await writeFile(FILE, JSON.stringify(updatedData, null, 2));
    console.log(response);
}
const login = async (data) => {
    const { email, password } = data;
    const fileData = await readFile(FILE);
    if (fileData.length === 0) return;
    const user = fileData.filter((u) => u.email === email)    
    if (!user) {
        console.log("Not Registered");
    } else {
        if (user[0].password == password) console.log("login successfull");
        else console.log("Incorrect password");
    }
}
login({ email: "squennell5@amazon.de", password: "dE3>!A0=bOR9" });

const changePassword = () => {

}
const deleteUser = () => {

}
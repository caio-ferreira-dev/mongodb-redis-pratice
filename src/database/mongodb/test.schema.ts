import * as mongooose from "mongoose";

export const TestSchema = new mongooose.Schema({
    stringTest: String,
    numberTest: Number
}, {versionKey: false})
import { Label } from "./label";

export class Note {
    file: string;
    title: string;
    description: string;
    labelIdList: string;
    checklist: string;
    isPined: boolean;
    isArchived: boolean;
    isDeleted: boolean;
    color: string;
    reminder: any[];
    collaborators: any[];
    id: string;
    userId: string;
    modifiedDate: Date;
    noteLabels:Label[];
}


/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class UpdateCandidateInput {
    id: string;
    name?: string;
    resume?: string;
    skills?: string[];
}

export class NewCandidateInput {
    name?: string;
    resume?: string;
    skills?: string[];
}

export abstract class IQuery {
    abstract me(): Candidate | Promise<Candidate>;
}

export abstract class IMutation {
    abstract updateMe(updateCandidateData?: UpdateCandidateInput): Candidate | Promise<Candidate>;
}

export class Candidate {
    id: string;
    name: string;
    resume?: string;
    createdAt?: Date;
    updatedAt?: Date;
    skills?: string[];
}

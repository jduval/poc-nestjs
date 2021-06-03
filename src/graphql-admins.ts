
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
    abstract candidates(): Candidate[] | Promise<Candidate[]>;

    abstract candidate(id: string): Candidate | Promise<Candidate>;
}

export abstract class IMutation {
    abstract addCandidate(newCandidateData?: NewCandidateInput): Candidate | Promise<Candidate>;

    abstract removeCandidate(id: string): boolean | Promise<boolean>;

    abstract updateCandidate(updateCandidateData: UpdateCandidateInput): Candidate | Promise<Candidate>;
}

export class Candidate {
    id: string;
    name: string;
    resume?: string;
    createdAt?: Date;
    updatedAt?: Date;
    skills?: string[];
}

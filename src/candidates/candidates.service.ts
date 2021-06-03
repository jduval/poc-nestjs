import { Injectable, NotFoundException } from '@nestjs/common';
import { NewCandidateDto } from './dto/new-candidate.input';
import { UpdateCandidateDto } from './dto/update-candidate.input';
import { Candidate } from '../graphql-candidates';

@Injectable()
export class CandidateService {
  private readonly candidates: Array<Candidate> = [
    {
      id: '1',
      name: 'Serge',
      resume: 'azeajvd jahzve avzje havzjehvaz jveae',
      skills: ['truc', 'truc 1'],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  async create(data: NewCandidateDto): Promise<Candidate> {
    const newCandidate = {
      id: (this.candidates.length + 1).toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...data,
    } as Candidate;
    this.candidates.push(newCandidate);
    return newCandidate;
  }

  async findOneById(id: string): Promise<Candidate> {
    return this.candidates.find((candidate) => candidate.id === id);
  }

  async findAll(/* recipesArgs: RecipesArgs */): Promise<Candidate[]> {
    return this.candidates;
  }

  async remove(id: string): Promise<boolean> {
    const indexToBeRemoved = this.candidates.findIndex(
      (candidate) => candidate.id === id,
    );
    if (indexToBeRemoved === -1) {
      return false;
    }
    this.candidates.splice(indexToBeRemoved, 1);
    return true;
  }

  async update(data: UpdateCandidateDto): Promise<Candidate> {
    const currentCandidateIndex = this.candidates.findIndex(
      (candidate) => candidate.id === data.id,
    );
    if (currentCandidateIndex === -1) {
      throw new NotFoundException('1');
    }
    this.candidates[currentCandidateIndex] = {
      ...this.candidates[currentCandidateIndex],
      ...data,
      updatedAt: new Date(),
    };
    return this.candidates[currentCandidateIndex];
  }
}

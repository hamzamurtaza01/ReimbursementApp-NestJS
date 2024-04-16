import { Injectable } from '@nestjs/common';
// import { Request } from './request.entity';
import { CreateRequestDto, UpdateRequestDto } from './dto';

type Request = {
  id: string;
  user_id: number;
  amount: number;
  description: string;
  status_id: number;
  file_url?: string;
  expense_type_id: number;
  expense_date: Date;
  created_at: Date;
};

@Injectable()
export class RequestsService {
  private readonly requests: Request[] = [];

  findAll(): Request[] {
    return this.requests;
  }

  findOne(id: string): Request {
    return this.requests.find((request) => request.id === id);
  }

  create(createRequestDto: CreateRequestDto): Request {
    const request: Request = {
      id: Math.random().toString(36).substr(2, 9), // Generate a random ID for the request
      ...createRequestDto,
    };
    this.requests.push(request);
    return request;
  }

  update(id: string, updateRequestDto: UpdateRequestDto): Request {
    const index = this.requests.findIndex((request) => request.id === id);

    if (index !== -1) {
      this.requests[index] = {
        ...this.requests[index],
        ...updateRequestDto,
      };
      return this.requests[index];
    }

    return null; // Return null if the request with the given ID doesn't exist
  }
}

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class MockTestsService {
  constructor(private httpService: HttpService) {}

  async getEmployee(id: number): Promise<unknown> {
    if (id < 1) {
      throw new BadRequestException(`Invalid Pokemon ID`);
    }
    const employee = await this.httpService.axiosRef({
      url: `http://localhost:3000/rebel/employees/${id}`,
      method: `GET`,
    });
    // console.log(employee.data);
    const { name, age } = employee.data;
    return { name, age };
    // return employee;
  }
}

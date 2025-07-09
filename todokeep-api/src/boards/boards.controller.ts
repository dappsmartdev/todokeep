import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardsService.getBoardWithTasks(id);
  }

  @Get()
  findAll() {
    return this.boardsService.findAll();
  }

  @Post()
  create(@Body() dto: CreateBoardDto) {
    return this.boardsService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('title') title: string) {
    return this.boardsService.update(id, title);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.boardsService.delete(id);
  }
}
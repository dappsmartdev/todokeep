import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

const uploadPath = join(process.cwd(), 'public/uploads');

@Controller('upload')
export class UploadController {
  constructor() {
    fs.mkdir(uploadPath, { recursive: true });
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: uploadPath,
        filename: (_req, file, cb) => {
          const randomName = uuidv4() + extname(file.originalname);
          return cb(null, randomName);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return { url: `/uploads/${file.filename}` };
  }
}
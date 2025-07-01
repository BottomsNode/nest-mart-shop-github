import { Controller, HttpStatus, ParseFilePipeBuilder, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { MAX_PROFILE_PICTURE_SIZE_IN_BYTES } from 'src/common';
import { ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { FilesUploadDto } from './dto/file-upload.dto';

@Controller('profile')
export class ProfileController {

  constructor(private readonly service: ProfileService) { }

  @Post('upload-single')
  @ApiOperation({ summary: 'Upload a single file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FilesUploadDto })
  @UseInterceptors(FileInterceptor('file'))
  public async uploadFile(@UploadedFile(new ParseFilePipeBuilder()
    .addFileTypeValidator({ fileType: 'image/jpeg' })
    .addMaxSizeValidator({ maxSize: MAX_PROFILE_PICTURE_SIZE_IN_BYTES })
    .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
  )
  file,
  ) {
    const fileName = await this.service.saveFile(file);
    return {
      message: 'File uploaded successfully',
      fileName: fileName,
      filePath: `/uploads/${fileName}`,
    };
  }

  @Post('upload-multiple')
  @ApiOperation({ summary: 'Upload multiple files' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FilesUploadDto })
  @UseInterceptors(FilesInterceptor('files'))
  async uploadMultipleFiles(@UploadedFiles() files: Array<Express.Multer.File>): Promise<{ message: string; fileNames: string[]; count: number; }> {
    const fileNames = await Promise.all(files.map(file => this.service.saveFile(file)));
    return {
      message: 'Files uploaded successfully',
      fileNames,
      count: files.length,
    };
  }

}

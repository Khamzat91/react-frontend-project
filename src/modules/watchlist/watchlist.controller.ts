import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { WatchlistDTO } from './dto';
import { JwtAuthGuard } from '../../guards/jwt-quards';

@Controller('watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  createAsset(@Body() assetDto: WatchlistDTO, @Req() request) {
    const user = request.user;
    return this.watchlistService.createAsset(user, assetDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteAsset(@Query('id') assetId: string, @Req() request): Promise<boolean> {
    const { id } = request.user;
    return this.watchlistService.deleteAsset(id, assetId);
  }
}

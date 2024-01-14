import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post, Query,
  Req,
  UseGuards
} from "@nestjs/common";
import { WatchlistService } from './watchlist.service';
import { WatchlistDTO } from './dto';
import { JwtAuthGuard } from '../../guards/jwt-quards';

@Controller('watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  createAsset (@Body() assetDto: WatchlistDTO, @Req() request) {
    const user = request.user;
    return this.watchlistService.createAsset(user, assetDto);
  }

  @Get('get-all')
  getAllAssets () {
    return;
  }

  @Patch('update')
  updateAsset () {
    return;
  }

  @Delete()
  deleteAsset (@Query('id') id: string) {
    return;
  }
}

import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService){}

    @Get()
    findAll(@Query("limit") limit: string){
        return this.movieService.findAll(limit);
    }

    @Get(":movieId")
    findMovie(@Param("movieId") movieId:string){
        return this.movieService.findMovie(movieId);
    }

    @Post()
    createMovie(@Body() newMovie: any){
        return this.movieService.createMovie(newMovie);
    }

    @Put(":movieId")
    updateMovie(@Param("movieId") movieId: string, @Body() movie:any){
        return this.movieService.updateMovie(movieId, movie);
    }

    @Delete(":movieId")
    deleteMovie(@Param("movieId") movieId: string){
        return this.movieService.deleteMovie(movieId);
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {

    constructor(
        @InjectRepository(Movie)
        private bookRepository: Repository<Movie>,
    ) {}

    findAll(limit: string){
        return `findAll is working with a limit of ${limit}`
    }

    findMovie(movieId:string){
        return `findMovie is working movieId = ${movieId}`
    }

    createMovie(movie: any){
        console.log(movie);
        return movie;
    }

    updateMovie(movieId: string, movie: any){
        console.log(movie);
        return `movie ${movieId} updated`
    }

    deleteMovie(movieId: string){
        return `movie ${movieId} deleted`
    }
}

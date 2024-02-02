import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    movieId: number;

    @Column()
    title: string;

    @Column()
    releaseYear: number;
    
    @Column()
    director: string;

    @Column()
    duration: number;

    @Column()
    genre: string;

    @Column()
    rate: number;
}

import { Column, Entity } from 'typeorm';
import { Base } from './extends/base.extend';

@Entity()
export class Announcement extends Base {
    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'varchar', length: 255 })
    link: string;

    @Column()
    content: string;

    @Column({ type: 'timestamp' })
    date: Date;
}
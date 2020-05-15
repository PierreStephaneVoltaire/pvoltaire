
import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

describe('Post Controller', () => {
  let controller: PostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      imports:[

        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: "./posts.sqlite",
          entities: [PostEntity],
        }),
        TypeOrmModule.forFeature([PostEntity]),

      ],
      providers: [PostService],

    }).compile();

    controller = module.get<PostController>(PostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
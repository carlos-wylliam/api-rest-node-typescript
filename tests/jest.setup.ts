import supertest from 'supertest';

import { server } from '../src/server/ServerIndex';


export const testServer = supertest(server);

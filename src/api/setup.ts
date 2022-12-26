import { setupWorker } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

const setupMSW = () => {
  if (typeof window === 'undefined') {
    // msw 에러를 제거하기 위해 최근 데이터를 확인해서 아래와 같이 적용
    const server = setupServer(...handlers);
    server.listen();
  } else {
    const worker = setupWorker(...handlers);
    worker.start();
  }
};

export default setupMSW;

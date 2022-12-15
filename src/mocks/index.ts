async function initMocks() {
  if (typeof window === 'undefined') {
    // msw 에러를 제거하기 위해 최근 데이터를 확인해서 아래와 같이 적용
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = await import('./browser');
    worker.start();
  }
}

initMocks();

export {};

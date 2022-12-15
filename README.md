# [Project] 29cm 개발 과제

## 💿 실행 방법

```cmd
$ npm install
$ npm run dev
$ npm run start (localhost:3001)
```

## 🎇사용 기술스택

- React
- Typescript
- Next.js
- zustand
- React-query
- emotion
- axios
- msw

## 👹문제요구사항 checklist

#### 메인 페이지 
- [X] 각 상품은 가격과 사진, 상품 제목을 표시한다.
- [X] 상품의 score를 기준으로 내림차순으로 정렬해 5개씩 보여주는 페이지네이션을 구현한다.
- [X] 각 장바구니에는 상품 담김 유무에 따라 담기와 빼기 버튼을 구현한다.
#### 장바구니 페이지
- [X] 장바구니에는 최대 3종류의 상품이 담길 수 있다.
- [X] 장바구니의 상품 중 결제에 포함할 상품을 체크박스 등의 UI로 선택할 수 있다.
- [X] 장바구니에 담긴 각 상품의 수량을 조절할 수 있다. (최소 한 개의 수량이 지정되어야 한다.)
- [X] 장바구니에 담긴 전체 상품의 최종 결제 금액에 대해 쿠폰을 적용할 수 있다.
- [X] 할인 적용이 불가능한 상품은 할인 계산에서 제외한다.
- [X] 최종 결제 금액으 ㄴ장바구니 페이지 하단에서 볼 수 있다.
- [X] 상품과 쿠폰데이터는 주어진 목업 데이터를 사용하되, 서버에서 주어진다는 것을 가정으로 구현한다.
- [X] 데이터의 raw값은 직접 변경하지 않는다.

## 👩‍💻구현

### 메인페이지


- 하단에 위치한 장바구니 버튼을 통해 상품을 카트에 담을 수 있다. 

![메인페이지_장바구니담기](https://user-images.githubusercontent.com/56627560/207855820-115aee9f-dcde-4644-b7dc-c601dfa43dda.gif)

- 카트에 담긴 상품은 새롭게 렌더링된 제거 버튼을 통해 카트에서 제거할 수 있다.
- 페이지네이션 버튼을 통해 상품 목록을 이동할 수 있다.
![메인페이지_상품제거_페이지네이션](https://user-images.githubusercontent.com/56627560/207856089-1c29e8d6-64e5-428d-9e56-2f1e1884074d.gif)

- 헤더 우측에 위치한 장바구니 버튼 부를 클릭하면 장바구니로 이동할 수 있다.
![메인페이지_ 장바구니이동](https://user-images.githubusercontent.com/56627560/207856169-97b958dd-46f2-4477-8131-59c2df6b3731.gif)

### 장바구니 페이지

- 장바구니의 상품들은 선택해서 쿠폰을 설정하거나, 제거할 수 있다.
![장바구니_상품선택하기](https://user-images.githubusercontent.com/56627560/207855943-99c984dd-fdb8-4e41-abab-691b70921e9e.gif)

- 상단에 위치한 버튼을 통해 전체선택 후 삭제할 수 있다.
![장바구니_전체선택_전체삭제](https://user-images.githubusercontent.com/56627560/207856279-764d613c-376f-474e-98cf-362d399f4895.gif)

- 쿠폰을 적용할 수 없는 상품은 할인불가라는 텍스트가 상품 가격 하단에 노출된다.
![장바구니_쿠폰미적용_예시1](https://user-images.githubusercontent.com/56627560/207856392-f019b58c-b930-486d-a77d-d7a92cb5772d.gif)

- 모든 제품을 선택 후 비율 쿠폰을 적용 시 적용할 수 있지만, 정액 할인 쿠폰은 나머지 상품금액의 합이 할인액보다 적을때 적용할 수 없다.
![장바구니_쿠폰미적용_예시2](https://user-images.githubusercontent.com/56627560/207856456-fefb4f79-2824-4dfa-8c0d-2fb7f0d98a90.gif)

![장바구니_쿠폰미적용_예시3](https://user-images.githubusercontent.com/56627560/207856497-1bbd2b7d-c540-47fe-84f2-0a8813c6f69f.gif)

- zustand persist 미들웨어를 적용해, 페이지가 리프레쉬 되어도 장바구니의 아이템들은 그대로 보관된다.
![장바구니_로컬캐싱](https://user-images.githubusercontent.com/56627560/207856831-e99d54e0-7198-4246-a755-1870874dddfe.gif)

### 공통 부분

- 목업 데이터를 그대로 사용하는 것이 아니라, mock service worker를 이용해서 Resful하게 api를 구현해 데이터를 패칭했다.
- 데이터 패칭을 위한 라이브러리는 react-query를 이용했다.

<img width="579" alt="Screen Shot 2022-12-15 at 9 20 58 PM" src="https://user-images.githubusercontent.com/56627560/207857984-3953dc37-d606-4a39-82f5-e78226951d11.png">

<img width="848" alt="Screen Shot 2022-12-15 at 9 20 50 PM" src="https://user-images.githubusercontent.com/56627560/207857991-8e76eb05-ec21-4703-afda-441d2d08b7b1.png">
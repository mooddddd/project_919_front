1. 목적

한국의 유저를 대상으로 한다.
수많은 구독 서비스 중 한국인이 자주 이용하는 OTT 및 유튜브의 가격을 한 눈에 알아볼 수 있게 정리해 놓는 것이 1차 서비스 목적이며, 특히 우회의 가능성이 높은 유튜브의 경우 나라별 요금제를 원화로 환산하여 실시간 비교할 수 있게 구성한다.
각 구독 서비스의 이용권(혹은 계정) 공유 기능을 활용하여 파티원을 구할 수 있는 커뮤니티를 개설하여 유저간 자유롭게 커뮤니티를 이용할 수 있도록 하는 것이 2차 목적이다.

2. 주요 기능

기본적으로 유튜브, 넷플릭스, 디즈니플러스, 왓챠, 웨이브, 티빙의 구독 이용료를 종류별로 나타내주며, 이를 최소인원 ~ 최대인원(명)으로 나누어 1인당 결제 금액을 계산할 수 있는 계산기를 제공한다.
유튜브의 경우 환율 API를 사용하여 현재 날짜에 맞는 환율을 계산해 각 국의 이용료를 원화로 나타낸다. 이 경우 가장 저렴한 5개의 국가를 명시해주며, 본 사이트에서 우회에 관한 정보는 일체 제공하지 않는다. 유튜브는 국가를 선택할 수 있으며, 선택 국가의 이용료를 적용하여 계산기를 이용할 수 있다.
각 서비스별로 카테고리를 나누어 계산 시스템을 넣은 게시판을 생성, 게시판은 해당 서비스의 UI 디자인을 모티브로 하여 제작한다(간단한 로고 삽입 등의 방법 사용).
커뮤니티 카테고리에서는 파티원을 구할 수 있는 게시글을 작성할 수 있으며, 정보 및 잡담 게시판을 추가적으로 제공한다.

3. 부가적 기능(시간 남으면 할 것)

- 각 OTT별 혜택 비교 서비스(할인 정보 등)
- 필터를 이용한 OTT 추천 서비스

4. 예상 페이지

- Main

- 구독 이용료 계산기(1 / 6 = 7) // 추가적으로 플랫폼의 소개페이지가 들어감

  - Youtube
  - Netflix
  - Disney +
  - Watcha
  - Wave
  - Tving

- Recruit (5)
  - list
  - view
  - write
  - modify
  - delete
- Information Board (5) -> 게시판의 종류가 두 가지뿐이므로 카테고리를 나누지 않고 hidden으로 category 필드 값 채울 예정
  - list
  - view
  - write
  - modify
  - delete
- Free Board

  - list
  - view
  - write
  - modify
  - delete

- Sign Up
- Login
- My Page

---

- Logout

- Admin

5. 요금제 정보

6. Project Rules

- 카멜 표기법 사용

7. Used package
   설치한 패키지가 있으면 언급해주세요~!!!
   새로운 패키지 설치 시 pull 받고 install 진행 필요!

8. router

```jsx
export const RecruitWriteTop = ({ color }) => {
  const color = {
    red: '#FF5858',
    black: '#252525',
    gray: '##535353',
  }
  return (
    <>
      <H2 color={color.red}>파티장</H2> <H2 color={color.black}>되기</H2>
      <Span>파티장이 되시려면 몇 가지 정보가 필요해요.</Span>
    </>
  )
}
```

환율계산
{Math.ceil(
(data['ottPlan.price'] \*
data['ottPlan.Country.Currencies.currencyValue']) /
data['ottPlan.limit']
)}

{v['ottPlan.Country.Currencies.currencyValue'] != null
? Math.ceil(
(v['ottPlan.price'] \*
v['ottPlan.Country.Currencies.currencyValue']) /
v['ottPlan.limit']
)
: Math.ceil(v['ottPlan.price'] / v['ottPlan.limit'])}

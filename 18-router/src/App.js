import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* router 로 동적으로 하겠다. */}
      <BrowserRouter>
        <Header />
        <Routes>
          {/* / 는 기본경로(main)으로 이동했다는 뜻 */}
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>
          <Route
            // 동적 라우트 설정
            // - 경로에 콜론(:) 사용
            // 아이디가 바뀌어야하니까 동적 인것으로 넣어줌
            path="/products/:productId"
            element={<ProductDetailPage />}
          ></Route>
          {/* * 는 모든것을 의미함 (everything) */}
          <Route path="*" element={<NotFound />} />
          {/* React router는 위에서 아래로 경로를 매칭 */}
          {/* 와일드카드 경로가 위에 배치시 모든 경로를 덮어 씌움 */}
          {/* 그러므로, 와일드카드 경로는 항상 마지막에 배치 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// #1. BrowserRouter
/**
 * - 애플리케이션을 전체를 감싸서 라우팅을 활성화 (최상위 컴포넌트)
 * - HTML5 History API 사용
 *   ㄴ 주소 표시줄과 동기화하여 URL을 관리하며, SEO, UX를 향상 시킴.
 */

// #2. Routes : 여러 Route 컴포넌트를 묶어주는 컨테이너 역할.
// #3. Route : 특정 경로에 해당하는 컴포넌트를 렌더링 하는 역할.
//     ㄴ path : 특정 경로 / element : 보여줄 컨텐츠

//--------------------------------------------(me)
// 컴포넌츠는 계속 재사용하려고 하는 애들
// 페이지는 그것들(컴포넌츠들)로 이루어져있는것들을 하나의 페이지에 넣는것

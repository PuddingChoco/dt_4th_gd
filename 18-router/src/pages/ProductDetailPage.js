import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productInfos } from "../components/ProductList";

export default function ProductDetailPage() {
  // hook 사용,  :productId 가져온것!
  const { productId } = useParams();
  // 상품 id  1번   2 번 등등
  console.log("파라미터 값 : ", productId); // '클릭한 ID 값' // 1
  console.log("파라미터 type : ", typeof productId); // string

  /**
   * #5. useParams
   * - URL 경로에서 동적 파라미터 값을 가져옴. (추출!)
   * - 다중 파라미터는 객체 형태로 반환.
   * - 항상 "문자열"로 반환
   */

  console.log("상품 Data : ", productInfos);

  // 배열 인덱스는 0 부터 시작인데, product 의 인덱스는 1 부터 시작해서 productId 에서 -1 해줘야함.
  // 근데 productId 는 타입이 string 이므로, -1 빼주려면 숫자여야함 -> Number( ) 로 형변환 해줘야함
  const targetProduct = productInfos[Number(productId) - 1];
  // 타겟한 상품이랑 인덱스 번호 일치 시키는 과정
  // 숫자 값으로 처리하기 위해 형변환!

  console.log(targetProduct);
  const { id, name, email, body } = targetProduct;

  // 보통 변수에 담아서 사용함
  const navigate = useNavigate();
  /**
   * #6. useNavigate
   * - 프로그래밍 방식으로 경로 변경.
   * - 프로그램적으로 브라우저의 히스토리 기능 제어 가능 (뒤로가기, 앞으로가기)
   *
   * *숫자 인자 의미
   * 양수 숫자 ('n')
   * - 현재 페이지에서 'n' 페이지 앞으로 이동
   * ex) 1 = 다음 페이지
   *
   * 음수 숫자 ('-n')
   * - 현재 페이지에서 'n' 페이지 뒤로 이동
   * ex -1 = 이전 페이지
   */

  // useNavigate 는 동적 경로 이동이 가능.
  // 동적 파라미터로 id 값 읽고 있음.
  // 다음상품(next product) 니까 + 1 해줘야 이동함
  const goToNextProduct = () => {
    const nextProductId = Number(productId) + 1; // 다음 상품 ID 계산.
    navigate(`/products/${nextProductId}`); // 동적 경로로 이동
  };

  const goToPreviousProduct = () => {
    const prevProductId = Number(productId) - 1; // 이전 상품 ID 계산.
    if (prevProductId > 0) {
      navigate(`/products/${prevProductId}`); // 동적 경로로 이동.
    } else {
      alert("이전 상품이 없습니다!");
    }
  };

  return (
    <div>
      <h1>ProductDetailPage</h1>
      {/* navigate 가 숫자 인자를 받고 뒤로 가게됨, 문자열도 넣을 수 있음 */}
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>
      <button onClick={goToPreviousProduct}>이전 상품</button>
      <button onClick={goToNextProduct}>다음 상품</button>
      <ul>
        <li>상품 번호 : {id}</li>
        <li>상품명 : {name}</li>
        <li>판매자 : {email}</li>
        <li>상세설명 : {body}</li>
      </ul>
    </div>
  );
}

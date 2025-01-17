import React from "react";
import { Link } from "react-router-dom";

// props 로 product 다 넘겨 받음
export default function ProductItem({ product }) {
  //   구조분해할당하기
  const { id, name, email, body } = product;

  return (
    // 내용이 너무 많으니 상품명과 상세설명만 보여주고자함.
    <div>
      {/* 상세설명 위해서 Link 태그 씀 */}
      <Link to={`/products/${id}`}>
        <ul>
          <li>상품명 : {name}</li>
          <li>상세설명 : {body}</li>
        </ul>
      </Link>
    </div>
  );
}

// react hook 실습
import React from "react";
import { useForm } from "react-hook-form";
import "./Practice1.css";

export default function Practice1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("폼 데이터 : ", data);
  };

  return (
    <div>
      <h1>react hook form 실습</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="이름"
          id="username"
          {...register("username", { required: "이름은 필수 항목 입니다." })}
        />
        {errors.username?.message}
        <input
          type="text"
          placeholder="나이"
          id="age"
          {...register("age", {
            pattern: {
              value: /^[0-9]$/,
              message: "0이상의 숫자만 입력 가능합니다",
            },
          })}
        />
        {errors.age?.message}
        <button type="sumbit">제출</button>
      </form>
    </div>
  );
}

import React, { useEffect, useMemo, useState } from "react";
import type MainTemplate from "./MainTemplate";
import { Checkbox, Flex, Float } from "@chakra-ui/react";

const LoginTemplate: React.FC = () => {
    return (
        <Flex align="center" gap="4">
            <div>이미지 넣을 예정</div>
            <div>
                <img src="/public/Logo.png"></img>
                <div>로그인</div>
                <div>당신의 면접을 위한 집사</div>
                <div>
                    <input placeholder="아이디"></input>
                </div>
                <div>
                    <input placeholder="비밀번호"></input>
                </div>
                <div>
                    <a>비밀번호 / 아이디 찾기</a>
                </div>
                <div>
                    <input type="checkbox"></input> 자동 로그인
                </div>
            </div>
        </Flex>
    );
};

export default LoginTemplate;

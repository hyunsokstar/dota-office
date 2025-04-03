import React from 'react';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">사무실 배치도</h1>
      
      <div className="border-2 border-gray-800 p-2 relative h-[800px] w-full">
        {/* 상단 영역 - 서버실과 식료품실 */}
        {/* 왼쪽 상단 - 서버실 */}
        <div className="absolute top-0 left-0 w-[300px] h-[150px] border-2 border-gray-800 flex items-center justify-center">
          <span className="font-bold text-lg">서버</span>
        </div>
        
        {/* 오른쪽 상단 - 식료품실 */}
        <div className="absolute top-0 right-0 w-[300px] h-[150px] border-2 border-gray-800">
          <div className="border-b-2 border-gray-800 h-[40px] flex items-center justify-center">
            <span className="font-bold">식료품</span>
          </div>
          <div className="h-[110px] flex items-center justify-around p-2">
            {/* 싱크대 */}
            <div className="w-[60px] h-[60px] border border-gray-800 flex items-center justify-center">
              <span className="text-xs">싱크대</span>
            </div>
            
            {/* 냉장고 */}
            <div className="w-[60px] h-[60px] border border-gray-800 flex items-center justify-center">
              <span className="text-xs">냉장고</span>
            </div>
            
            {/* 커피머신 */}
            <div className="w-[60px] h-[60px] border border-gray-800 flex items-center justify-center">
              <span className="text-xs">커피<br/>머신</span>
            </div>
          </div>
        </div>
        
        {/* 중간 영역 - 휴게실과 연구팀 */}
        {/* 왼쪽 중간 - 휴게실 */}
        <div className="absolute top-[200px] left-0 w-[300px] h-[250px] border-2 border-gray-800 flex items-center justify-center">
          <span className="font-bold text-xl">휴게실</span>
        </div>
        
        {/* 오른쪽 중간 - 연구팀 */}
        <div className="absolute top-[200px] right-0 w-[300px] h-[250px] border-2 border-gray-800 flex flex-col items-center justify-center">
          {/* 김용주 연구소장 */}
          <div className="flex items-center mb-4">
            <div className="w-[20px] h-[60px] border border-gray-800"></div>
            <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
              <span className="text-black font-medium text-xs">김용주<br/>연구소장</span>
            </div>
          </div>
          
          {/* 신우진 연구원, 최성렬 연구원 */}
          <div className="flex items-center mb-4">
            <div className="w-[20px] h-[60px] border border-gray-800"></div>
            <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
              <span className="text-black font-medium text-xs">신우진<br/>연구원</span>
            </div>
            <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center ml-2">
              <span className="text-black font-medium text-xs">최성렬<br/>연구원</span>
            </div>
            <div className="w-[20px] h-[60px] border border-gray-800"></div>
          </div>
          
          {/* 나우성 선임, 오현석 책임 */}
          <div className="flex items-center">
            <div className="w-[20px] h-[60px] border border-gray-800"></div>
            <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
              <span className="text-black font-medium text-xs">나우성<br/>선임</span>
            </div>
            <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center ml-2">
              <span className="text-black font-medium text-xs">오현석<br/>책임</span>
            </div>
            <div className="w-[20px] h-[60px] border border-gray-800"></div>
          </div>
        </div>
        
        {/* 하단 영역 - 일반 사무실 */}
        {/* 왼쪽 하단 - 첫 줄 */}
        <div className="absolute top-[500px] left-0 w-[300px] flex items-center justify-center">
          <div className="flex">
            <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
              <span className="text-black font-medium text-xs">김남식<br/>실장</span>
            </div>
            <div className="w-[20px] h-[60px] border border-gray-800 mx-2"></div>
            <div className="w-[80px] h-[60px] bg-gray-400"></div>
            <div className="w-[20px] h-[60px] border border-gray-800 mx-2"></div>
          </div>
        </div>
        
        {/* 왼쪽 하단 - 두번째 줄 */}
        <div className="absolute top-[570px] left-0 w-[300px] flex items-center justify-center">
          <div className="flex">
            <div className="w-[80px] h-[60px] bg-gray-400"></div>
            <div className="w-[20px] h-[60px] border border-gray-800 mx-2"></div>
            <div className="w-[80px] h-[60px] bg-gray-400"></div>
            <div className="w-[20px] h-[60px] border border-gray-800 mx-2"></div>
          </div>
        </div>
        
        {/* 왼쪽 하단 - 세번째 줄 */}
        <div className="absolute top-[640px] left-0 w-[300px] flex items-center justify-center">
          <div className="flex">
            <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
              <span className="text-black font-medium text-xs">강래곤<br/>상무</span>
            </div>
            <div className="w-[20px] h-[60px] border border-gray-800 mx-2"></div>
            <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
              <span className="text-black font-medium text-xs">김성화<br/>이사</span>
            </div>
            <div className="w-[20px] h-[60px] border border-gray-800 mx-2"></div>
          </div>
        </div>
        
        {/* 오른쪽 하단 - 첫 줄 */}
        <div className="absolute top-[500px] right-0 w-[300px] flex items-center justify-center">
          <div className="flex">
            <div className="w-[20px] h-[60px] border border-gray-800 mx-2"></div>
            <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
              <span className="text-black font-medium text-xs">이영렬<br/>전무</span>
            </div>
            <div className="w-[20px] h-[60px] border border-gray-800 mx-2"></div>
            <div className="w-[80px] h-[60px] bg-gray-400"></div>
          </div>
        </div>
        
        {/* 오른쪽 하단 - 두번째 줄 */}
        <div className="absolute top-[570px] right-0 w-[300px] flex items-center justify-center">
          <div className="flex">
            <div className="w-[20px] h-[60px] border border-gray-800 mx-2"></div>
            <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
              <span className="text-black font-medium text-xs">허윤<br/>수석</span>
            </div>
            <div className="w-[20px] h-[60px] border border-gray-800 mx-2"></div>
            <div className="w-[80px] h-[60px] bg-gray-400"></div>
          </div>
        </div>
        
        {/* 오른쪽 하단 - 세번째 줄 */}
        <div className="absolute top-[640px] right-0 w-[300px] flex items-center justify-center">
          <div className="flex">
            <div className="w-[20px] h-[60px] border border-gray-800 mx-2"></div>
            <div className="w-[80px] h-[60px] bg-gray-400"></div>
            <div className="w-[20px] h-[60px] border border-gray-800 mx-2"></div>
            <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
              <span className="text-black font-medium text-xs">진일규<br/>수석</span>
            </div>
          </div>
        </div>
        
        {/* 최하단 중앙 - 오먼석/전영화 - 왼쪽과 오른쪽 영역 중앙에 배치 */}
        <div className="absolute bottom-[10px] left-[100px] w-[100px] h-[60px] bg-gray-400 flex items-center justify-center">
          <span className="text-black font-medium text-xs">오문석<br/>대표이사</span>
        </div>
        
        <div className="absolute bottom-[10px] right-[100px] w-[100px] h-[60px] bg-gray-400 flex items-center justify-center">
          <span className="text-black font-medium text-xs">전영희<br/>부사장</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
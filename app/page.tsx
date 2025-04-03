import React from 'react';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">사무실 배치도</h1>
      
      <div className="border-2 border-gray-800 p-2 relative h-[800px] w-full">
        {/* 왼쪽 상단 - 소파 영역 */}
        <div className="absolute top-0 left-0 w-[200px] h-[100px] border-2 border-gray-800 flex items-center justify-center">
          <span className="font-bold text-lg">서버</span>
        </div>
        
        {/* 오른쪽 상단 - 식료품과 냉장고, 싱크대, 커피머신 */}
        <div className="absolute top-0 right-0 w-[200px] h-[150px] border-2 border-gray-800">
          <div className="border-b-2 border-gray-800 h-[40px] flex items-center justify-center">
            <span className="font-bold">식료품</span>
          </div>
          <div className="h-[110px] relative">
            {/* 냉장고 */}
            <div className="absolute top-[30px] left-[70px] w-[50px] h-[50px] border border-gray-800 flex items-center justify-center">
              <span className="text-sm">냉장고</span>
            </div>
            
            {/* 싱크대 - 냉장고 왼쪽 */}
            <div className="absolute top-[30px] left-[10px] w-[50px] h-[50px] border border-gray-800 flex items-center justify-center">
              <span className="text-sm">싱크대</span>
            </div>
            
            {/* 커피머신 - 냉장고 오른쪽 */}
            <div className="absolute top-[30px] right-[10px] w-[50px] h-[50px] border border-gray-800 flex items-center justify-center">
              <span className="text-xs">커피<br/>머신</span>
            </div>
          </div>
        </div>
        
        {/* 왼쪽 휴게실 영역 */}
        <div className="absolute top-[150px] left-0 w-[300px] h-[250px] border-2 border-gray-800 flex items-center justify-center">
          <span className="font-bold text-xl">휴게실</span>
        </div>
        
        {/* 김용주 연구소장 - 위치 조정 */}
        <div className="absolute top-[220px] right-[230px] flex items-center space-x-2">
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
          <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
            <span className="text-black font-medium text-xs">김용주<br/>연구소장</span>
          </div>
        </div>
        
        {/* 중간 오른쪽 - 신우진/최성렬/나우성/오현석 */}
        <div className="absolute top-[320px] right-[230px] flex items-center space-x-2">
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
          <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
            <span className="text-black font-medium text-xs">신우진<br/>연구원</span>
          </div>
        </div>
        
        <div className="absolute top-[320px] right-[120px] flex items-center space-x-2">
          <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
            <span className="text-black font-medium text-xs">최성렬<br/>연구원</span>
          </div>
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
        </div>
        
        <div className="absolute top-[390px] right-[230px] flex items-center space-x-2">
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
          <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
            <span className="text-black font-medium text-xs">나우성<br/>선임</span>
          </div>
        </div>
        
        <div className="absolute top-[390px] right-[120px] flex items-center space-x-2">
          <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
            <span className="text-black font-medium text-xs">오현석<br/>책임</span>
          </div>
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
        </div>
        
        {/* 아래쪽 왼쪽 - 김남식 실장이 첫번째 자리로 이동 */}
        <div className="absolute top-[490px] left-[120px] flex items-center space-x-2">
          <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
            <span className="text-black font-medium text-xs">김남식<br/>실장</span>
          </div>
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
        </div>
        
        {/* 아래쪽 왼쪽 - 나머지 빈자리들 */}
        <div className="absolute top-[490px] left-[230px] flex items-center space-x-2">
          <div className="w-[80px] h-[60px] bg-gray-400"></div>
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
        </div>
        
        <div className="absolute top-[560px] left-[120px] flex items-center space-x-2">
          <div className="w-[80px] h-[60px] bg-gray-400"></div>
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
        </div>
        
        <div className="absolute top-[560px] left-[230px] flex items-center space-x-2">
          <div className="w-[80px] h-[60px] bg-gray-400"></div>
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
        </div>
        
        {/* 아래쪽 오른쪽 - 이영렬/허윤 */}
        <div className="absolute top-[490px] right-[120px] flex items-center space-x-2">
          <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
            <span className="text-black font-medium text-xs">이영렬<br/>전무</span>
          </div>
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
        </div>
        
        <div className="absolute top-[560px] right-[120px] flex items-center space-x-2">
          <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
            <span className="text-black font-medium text-xs">허윤<br/>수석</span>
          </div>
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
        </div>
        
        {/* 최하단 그룹 */}
        <div className="absolute bottom-[80px] left-[120px] flex items-center space-x-2">
          <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
            <span className="text-black font-medium text-xs">강래곤<br/>상무</span>
          </div>
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
        </div>
        
        <div className="absolute bottom-[80px] left-[230px] flex items-center space-x-2">
          <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
            <span className="text-black font-medium text-xs">김성화<br/>이사</span>
          </div>
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
        </div>
        
        {/* 추가 자리 및 진일규 수석 자리 이동 - 더 오른쪽으로 위치 조정 */}
        <div className="absolute bottom-[80px] right-[230px] flex items-center space-x-2">
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
          <div className="w-[80px] h-[60px] bg-gray-400"></div>
        </div>
        
        <div className="absolute bottom-[80px] right-[120px] flex items-center space-x-2">
          <div className="w-[20px] h-[60px] border border-gray-800"></div>
          <div className="w-[80px] h-[60px] bg-gray-400 flex items-center justify-center">
            <span className="text-black font-medium text-xs">진일규<br/>수석</span>
          </div>
        </div>
        
        {/* 최하단 중앙 - 오먼석/전영화 */}
        <div className="absolute bottom-[10px] left-[180px] w-[100px] h-[60px] bg-gray-400 flex items-center justify-center">
          <span className="text-black font-medium text-xs">오문석<br/>대표이사</span>
        </div>
        
        <div className="absolute bottom-[10px] right-[180px] w-[100px] h-[60px] bg-gray-400 flex items-center justify-center">
          <span className="text-black font-medium text-xs">전영화<br/>부사장</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import '../app.css';
	let pageTitle;

// 페이지 제목을 읽어오는 함수
	function getPageTitle() {
  		pageTitle = document.title;
	}

// 컴포넌트가 마운트될 때 페이지 제목을 읽어옴
	onMount(() => {
  		getPageTitle();
	});
</script>

<div>

	<div class="grid place-items-center gap-y-10">
	
			
		<!-- 1번 : 네비게이션바 -->
		<div class="text-white text-xl w-11/12 min-h-14 align-middle bg-rose-500 rounded-2xl flex justify-around mt-10 shadow-xl">
			<a href="./"><div class="">ontestbed.com<br><div class="text-xs">by iuxy5</div></div></a>
			<a href="./"><div class="pt-3">blog</div></a>
			<a href="./"><div class="pt-3">datas</div></a>
			<a href="./"><div class="pt-3">apps</div></a>
			<a href="./"><div class="pt-3">account</div></a>
		</div>

		<!-- 2번 : 제목 -->
		<div class="text-black w-11/12 min-h-96 bg-rose-300 text-6xl rounded-2xl text-center align-middle shadow-xl"><br><br>{pageTitle}</div>


		<!-- 3번 : 본문 -->
		<div class="text-black w-11/12 bg-rose-50 text-xl rounded-2xl text-center align-middle shadow-xl"><br><slot></slot><br></div>

		<!-- 4번 : 하단 -->
		<div>text</div>


		<!-- 5번 : 저작권, 법률정보 -->
		<div class="w-11/12 min-h-40 bg-gray-600 text-white text-xl rounded-2xl text-center align-middle shadow-xl"><br>iuxy5(뷰리버드)에 의해 창작된 본 사이트와 본 사이트에 탑제된 저작물(글, 영상등)은<br>크리에이티브 커먼즈 저작자표시-비영리-동일조건 변경허락에 따라 이용할 수 있습니다.<br>
		* 그러나, 본 사이트에 탑제된 저작물이라 할지라도, 창작자가 본 사이트의 창작자와 다른 저작물, 본 사이트에 탑제된 소프트웨어는<br>별도의 라이선스를 따르고 있으므로, 사용전 면밀한 확인이 필요합니다.<br><br>
	</div>
	</div>

</div>

<svelte:head>
	<html lang="ko">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>


<script>
	import '../app.css'; // Remove this line if not needed
	import { onMount } from 'svelte';

	let banner = '';

	onMount(async () => {
		try {
			const response = await fetch('https://raw.githubusercontent.com/hya19/many_texts/main/ontestbed');
			banner = await response.text();
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	});
</script>

<div>
	<div class="grid place-items-center gap-y-10">
	
		<!-- 1번 : 네비게이션바 -->
		<div class="text-white text-lg w-11/12 min-h-14 align-middle bg-rose-500 rounded-2xl flex justify-around mt-10 shadow-xl">
			<a href="./"><div class="">ontestbed.com<br><div class="text-xs">by iuxy5</div></div></a>
			<a href="./"><div class="pt-3">blog</div></a>
			<a href="./"><div class="pt-3">datas</div></a>
			<a href="./"><div class="pt-3">apps</div></a>
			<!-- <a href="./"><div class="pt-3">account</div></a> -->
		</div>

		<!-- 2, 3번은 개별 파일에 위치 -->
		<slot></slot>
		{banner}

		<!-- 4번 : 하단
		<div class="text-black w-11/12 min-h-48 bg-rose-50 text-2xl rounded-2xl text-center align-middle shadow-xl"><br>sd</div> -->

		<!-- 5번 : 저작권, 법률정보 -->
		<div class="mb-10 w-11/12 min-h-40 bg-gray-700 text-white text-xl rounded-2xl text-center align-middle shadow-xl"><br>iuxy5(뷰리버드)에 의해 창작된 본 사이트와 본 사이트에 탑제된 저작물(글, 영상등)은<br>크리에이티브 커먼즈 저작자표시-비영리-동일조건 변경허락에 따라 이용할 수 있습니다.<br>
		* 그러나, 본 사이트에 탑제된 저작물이라 할지라도, 창작자가 본 사이트의 창작자와 다른 저작물, 본 사이트에 탑제된 소프트웨어는<br>별도의 라이선스를 따르고 있으므로, 사용전 면밀한 확인이 필요합니다.<br><br></div>

	</div>
</div>

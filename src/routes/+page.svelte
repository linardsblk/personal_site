<script lang="ts">
  import { onMount } from 'svelte';
  import { homePageAnimated } from './store';

  const minTypeSpeed = 30;
  const maxTypeSpeed = 100;
  const randomTypeSpeed = () =>
    Math.floor(Math.random() * (maxTypeSpeed - minTypeSpeed + 1)) +
    minTypeSpeed;

  let text = '';

  const typewriter = (index: number, typewritterText: string) => {
    return new Promise<void>((resolve) => {
      const speed = randomTypeSpeed();

      setTimeout(async () => {
        if (index < typewritterText.length) {
          text += typewritterText.charAt(index);
          await typewriter(index + 1, typewritterText).then(resolve);
        } else {
          resolve();
        }
      }, speed);
    });
  };

  const typewritterDelete = (deleteChars: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        if (deleteChars > 0) {
          text = text.slice(0, -1);
          typewritterDelete(deleteChars - 1).then(resolve);
        } else {
          resolve();
        }
      }, 120);
    });
  };

  onMount(async () => {
    if ($homePageAnimated) {
      text = '> Full-stack developer';
      return;
    }

    await typewriter(0, '> Fullst');
    await typewritterDelete(2);
    await typewriter(0, '-stack developer');

    homePageAnimated.update(() => true);
  });
</script>

<svelte:head>
  <title>Hello!</title>
  <meta name="description" content="Linards personal site" />
</svelte:head>
<section
  class="relative flex flex-[0.8] flex-col justify-center text-center md:ml-20 md:items-start"
>
  <div class="w-screen" />
  <div class="text-lg text-slate-200">Hi all. I am</div>
  <h1 class="text-6xl text-slate-200">Linards Bulks</h1>
  <div class="flex">
    <h1 class="text-3xl text-secondary-blue">{text}</h1>
    <span
      class="animate-duration-500 ml-2 h-10 w-1 animate-blink bg-secondary-blue"
    />
  </div>

  <!-- Blue gradient -->
  <div class="absolute bottom-0 right-0 top-0">
    <svg
      class="w-full min-w-0"
      width="868"
      height="831"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4" filter="url(#filter0_f_64_1235)">
        <path
          d="M477.946 656.519L264.032 605.132L174.663 540.469L201.226 369.957L376.649 350.391L375.041 228.647L577.309 174.392L707.602 205.691L625.165 471.797L497.892 504.987L477.946 656.519Z"
          fill="#4D5BCE"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_64_1235"
          x="0.663574"
          y="0.391769"
          width="880.938"
          height="830.128"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="87"
            result="effect1_foregroundBlur_64_1235"
          />
        </filter>
      </defs>
    </svg>
  </div>

  <!-- Green gradient -->
  <div class="absolute bottom-0 right-0 top-0">
    <svg
      width="864"
      height="784"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full min-w-0"
    >
      <g opacity="0.4" filter="url(#filter0_f_64_1236)">
        <path
          d="M673.469 258.482L689.984 477.861L655.759 582.726L485.295 609.598L413.003 448.57L297.588 487.343L184.059 311.368L174 177.746L452.567 174.828L523.099 285.846L673.469 258.482Z"
          fill="#43D9AD"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_64_1236"
          x="0"
          y="0.827728"
          width="863.983"
          height="782.77"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="87"
            result="effect1_foregroundBlur_64_1236"
          />
        </filter>
      </defs>
    </svg>
  </div>
</section>

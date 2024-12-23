<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let images: string[];
  export let aspectRatio: "square" | "video" | "portrait" = "video";
  export let overlay: boolean;
  let currentIndex = 0;
  let interval: ReturnType<typeof setInterval>;
  let isMobile = false;

  const next = () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  };

  const prev = () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  };

  const goToSlide = (index: number) => {
    currentIndex = index;
  };

  onMount(() => {
    // Check mobile only after component is mounted
    isMobile = window.innerWidth < 768;
    
    const handleResize = () => {
      isMobile = window.innerWidth < 768;
    };

    window.addEventListener('resize', handleResize);
    interval = setInterval(next, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interval) clearInterval(interval);
    };
  });
</script>

<div class="relative group ">
  <div class="overflow-hidden ">
    <div 
      class="flex transition-transform duration-500 ease-in-out"
      style="transform: translateX(-{currentIndex * 100}%)"
    >
      {#each images as image, index}
        <div 
          class="w-full flex-shrink-0 {
            isMobile ? 'aspect-[3/4]' : 
            aspectRatio === 'square' ? 'aspect-square' : 
            aspectRatio === 'portrait' ? 'aspect-[3/4]' : 
            'aspect-video'
          } relative {overlay === true? 'brightness-75': ''}"
        >
          <div class="absolute inset-0">
            <img
              src={image}
              alt=""
              class="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <button
    on:click={prev}
    class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
    aria-label="Previous slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </button>
  
  <button
    on:click={next}
    class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
    aria-label="Next slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </button>

  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
    {#each images as _, index}
      <button
        on:click={() => goToSlide(index)}
        class="w-2 h-2 rounded-full transition-colors {
          index === currentIndex ? 'bg-white' : 'bg-white/50'
        }"
        aria-label="Go to slide {index + 1}"
      />
    {/each}
  </div>
</div>
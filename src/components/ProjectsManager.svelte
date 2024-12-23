<script lang="ts">
  export let projects: {
    id: number;
    title: string;
    location: string;
    year: number;
    image: string;
  }[];

  let viewMode: 'table' | 'grid' = 'table';

  if (typeof localStorage !== 'undefined') {
    viewMode = (localStorage.getItem('projectViewMode') as 'table' | 'grid') || 'table';
  }

  function setViewMode(mode: 'table' | 'grid') {
    viewMode = mode;
    localStorage.setItem('projectViewMode', mode);
  }
</script>

<div class="container mx-auto px-6 py-12">
  <div class="flex justify-between items-center mb-8">
    <h1 class="text-3xl font-bold">Gestionar Proyectos</h1>
    <div class="flex items-center gap-4">
      <div class="flex bg-gray-100 rounded-lg p-1">
        <button
          class="px-3 py-1 rounded-md transition-colors {viewMode === 'table' ? 'bg-white shadow-sm' : ''}"
          on:click={() => setViewMode('table')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
        <button
          class="px-3 py-1 rounded-md transition-colors {viewMode === 'grid' ? 'bg-white shadow-sm' : ''}"
          on:click={() => setViewMode('grid')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </button>
      </div>
      <a 
        href="/admin/projects/new" 
        class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Nuevo Proyecto
      </a>
    </div>
  </div>

  {#if viewMode === 'table'}
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Título</th>
            <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Ubicación</th>
            <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Año</th>
            <th class="px-6 py-3 text-right text-sm font-medium text-gray-500">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          {#each projects as project}
            <tr>
              <td class="px-6 py-4">{project.title}</td>
              <td class="px-6 py-4">{project.location}</td>
              <td class="px-6 py-4">{project.year}</td>
              <td class="px-6 py-4 text-right">
                <a 
                  href={`/admin/projects/${project.id}/edit`}
                  class="text-gray-600 hover:text-black"
                >
                  Editar
                </a>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each projects as project}
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="aspect-video">
            <img 
              src={project.image} 
              alt={project.title}
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{project.title}</h3>
            <p class="text-gray-600 mb-4">{project.location} • {project.year}</p>
            <a 
              href={`/admin/projects/${project.id}/edit`}
              class="text-black hover:text-gray-600 transition-colors"
            >
              Editar Proyecto
            </a>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
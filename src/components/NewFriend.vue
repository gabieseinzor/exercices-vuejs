<template>
  <div class="card w-full bg-sky-400 shadow-md">
    <div class="card-body gap-3">
      <h2 class="card-title text-2xl text-sky-950">Ajouter un Nouvel Ami</h2>

      <form class="flex flex-col gap-3">
        <label class="flex flex-col gap-1 text-sm text-sky-950">
          Nom
          <input
            type="text"
            placeholder="Votre nom"
            class="input input-sm w-full bg-white text-black"
          />
        </label>

        <label class="flex flex-col gap-1 text-sm text-sky-950">
          Téléphone
          <input
            type="tel"
            placeholder="Votre Tél (ex: 06 00 00 00 00)"
            class="input input-sm w-full bg-white text-black"
          />
        </label>

        <label class="flex flex-col gap-1 text-sm text-sky-950">
          Email
          <input
            type="email"
            placeholder="Votre EMAIL"
            class="input input-sm w-full bg-white text-black"
          />
        </label>

        <button type="submit" class="btn btn-sm btn-primary w-full mt-2">
          Ajouter Ami
        </button>
      </form>
    </div>
  </div>
</template>

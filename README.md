##navigation

- home
- about
- solutions -> `Web Dev`, `chat bot`, `graphic` `design`, `seo`, `ditial marketing`, `app dev`
- contact




@brand wings






`https://wa.me/<number>?text=`


`For New Line` = %0A
`For Space` = %20
`For @` = %40




















<!-- Our Client -->
      <section class="bg-themeClr py-32 flex flex-col gap-20 justify-center">
        <h2 class="text-stone-500 text-3xl md:text-5xl text-center font-bold">Clients we worked with</h2>
        <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div class="max-w-xl">
            <h2 class="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Meet our Clients</h2>
            <p class="mt-6 text-lg/8 text-gray-600">We’re proud to work with trusted clients across industries. Their success reflects our commitment to quality, innovation, and lasting impact. From startups to leading enterprises, we deliver solutions that make a difference.</p>
          </div>
          <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            <%- include("./components/clients", {name: "Leslie Alexander", title: "Brand Marketing"}) %>
            <%- include("./components/clients", {name: "James Anderson", title: "Website Development"}) %>
            <%- include("./components/clients", {name: "David Thompson", title: "Website Design"}) %>
            <%- include("./components/clients", {name: "Daniel Foster", title: "Search Enging optimization"}) %>
          </ul>
        </div>
      </section>
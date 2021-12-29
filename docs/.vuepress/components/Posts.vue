<template>
  <div class="posts" v-if="posts.length">
    <div class="post" v-for="post in posts">
      <ul>
        <router-link :to="post.path">
          <!-- <div>
          <img
            v-if="post.frontmatter.image"
            :src="$withBase(post.frontmatter.image)"
            alt=""
          />
        </div> -->
          <li>
            <h3>{{ post.frontmatter.title }}</h3>
          </li>
          <!-- <br /> -->
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter((x) => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    },
  },
};
</script>
<style scoped>
h3 {
  margin: 0;
}
ul {
  margin-top: 10px;
  margin-bottom: 0;
}
</style>
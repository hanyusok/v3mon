<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h4>Add New User</h4>
            <hr />

            <form @submit.prevent="store">
              <div class="form-group">
                <label for="title" class="font-weight-bold">TITLE</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="post.title"
                  placeholder="Masukkan Judul Post"
                />
                <!-- validation -->
                <div v-if="validation.title" class="mt-2 alert alert-danger">
                  {{ validation.title[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="font-weight-bold">CONTENT</label>
                <textarea
                  class="form-control"
                  rows="4"
                  v-model="post.content"
                  placeholder="Masukkan Konten Post"
                ></textarea>
                <!-- validation -->
                <div v-if="validation.content" class="mt-2 alert alert-danger">
                  {{ validation.content[0] }}
                </div>
              </div>
              <button type="submit" class="btn btn-primary">SIMPAN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useUserStore } from "../../stores/user";

const users = useUserStore();
</script>

<style>
body {
  background: lightgray;
}
</style>

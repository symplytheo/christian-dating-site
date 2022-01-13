<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card class="pa-5">
      <h2 class="text-center font-weight-bold text-h6 mb-2">
        Upload your KYC Document
      </h2>
      <div class="text--secondary text-center mb-5">Only PDF is allowed</div>
      <v-form>
        <v-row justify="center">
          <v-col v-if="!file" cols="12" md="10">
            <label for="upload">
              <v-card
                height="200"
                flat
                link
                color="#f1f1f1"
                style="border: 2px dashed #6d9cff"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <div class="text-center pa-5">
                    <v-icon size="100">{{ mdiCloudUploadOutline }}</v-icon>
                    <div class="mt-2">Click to browse or upload file</div>
                  </div>
                </v-row>
              </v-card>
              <input
                id="upload"
                name="upload"
                type="file"
                accept=".pdf"
                hidden
                @change="previewFile($event)"
              />
            </label>
          </v-col>
          <v-col v-if="file" cols="12" md="10">
            <div
              class="
                pa-2
                secondary
                lighten-2
                white--text
                my-5
                rounded
                d-flex
                align-center
                justify-space-between
              "
            >
              <div class="d-inline-flex align-center">
                <v-icon color="white" x-large left>
                  {{ mdiFileDocumentOutline }}
                </v-icon>
                <div>
                  <div class="subtitle-2">{{ upload.name }}</div>
                  <div class="caption">
                    {{ (upload.size / (1024 * 1024)).toFixed(2) }} MB
                  </div>
                </div>
              </div>
              <div class="pa-2">
                <v-btn icon color="white" @click="file = null">
                  <v-icon>{{ mdiCloseCircleOutline }}</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="10" md="8">
            <v-btn
              color="primary"
              block
              x-large
              depressed
              :loading="loading"
              :disabled="!file"
              @click="uploadKYCDocument"
            >
              Upload KYC
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import {
  mdiCloseCircleOutline,
  mdiFileDocumentOutline,
  mdiCloudUploadOutline,
} from '@mdi/js'

export default {
  props: {
    value: { type: Boolean, default: false },
  },
  data: () => ({
    mdiCloseCircleOutline,
    mdiFileDocumentOutline,
    mdiCloudUploadOutline,
    file: null,
    upload: { name: '', size: '' },
    loading: false,
  }),
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    previewFile(e) {
      const reader = new FileReader()
      reader.onload = () => {
        this.file = reader.result
      }
      reader.readAsDataURL(e.target.files[0])
      this.upload = e.target.files[0]
    },
    uploadKYCDocument() {},
  },
}
</script>

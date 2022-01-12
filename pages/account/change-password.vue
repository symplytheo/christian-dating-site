<template>
  <v-container class="py-10">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="11" md="10">
        <v-card flat class="pa-5">
          <h2 class="text-center font-weight-black text-h5 mb-5">
            Change Password
          </h2>
          <div>
            <v-form v-model="isValid">
              <v-row no-gutters justify="center">
                <v-col cols="12">
                  <div class="mb-1">Old Password</div>
                  <v-text-field
                    v-model="form.oldPassword"
                    type="password"
                    outlined
                    placeholder="Enter your old password"
                    :rules="[(v) => !!v || 'Old password is required']"
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <div class="mb-1">New Password</div>
                  <v-text-field
                    v-model="form.newPassword"
                    :type="show ? 'text' : 'password'"
                    outlined
                    placeholder="Enter your new password"
                    :rules="[(v) => !!v || 'New password is required']"
                    required
                    :append-icon="show ? mdiEyeOff : mdiEye"
                    @click:append="show = !show"
                  />
                </v-col>
                <v-col cols="12">
                  <div class="mb-1">Confirm New Password</div>
                  <v-text-field
                    v-model="form.confirmPassword"
                    :type="show ? 'text' : 'password'"
                    outlined
                    placeholder="Confirm your new password"
                    :rules="[
                      (v) => !!v || 'Confirm password is required',
                      (v) =>
                        v === form.newPassword ||
                        'Confirm password does not match',
                    ]"
                    required
                    :append-icon="show ? mdiEyeOff : mdiEye"
                    @click:append="show = !show"
                  />
                </v-col>
                <v-col cols="12" sm="10" md="8">
                  <v-btn
                    color="primary"
                    block
                    x-large
                    depressed
                    :disabled="!isValid"
                    :loading="loading"
                    @click="changePassword"
                  >
                    Change Password
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiEye, mdiEyeOff } from '@mdi/js'

export default {
  data: () => ({
    mdiEye,
    mdiEyeOff,
    form: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    isValid: false,
    loading: false,
    show: false,
  }),
  head() {
    return { title: 'Change Password' }
  },
  methods: {
    changePassword() {},
  },
}
</script>

<template>
  <customer-manage
    :api="{ 
      fetchList,
      fetchUsersList,
      fetchStatusList,
      updateTransfer,
    }"
  ></customer-manage>
</template>

<script>
export default {
  name: "CustomerManageComponent",
  data() {
    return {
      token: "Bearer 74a94182-c64a-4fb7-822f-eedef47515fb",
      baseUrl: 'http://192.168.100.126:8030',
    };
  },
  methods: {
    async fetchList(data, query) {
      try {
        let params = {
          pageNumber: query.pageNumber || 1,
          pageSize: query.pageSize || 10
        };

        const response = await fetch(
          `${this.baseUrl}/recognize/customer?pageNumber=${params.pageNumber}&pageSize=${params.pageSize}`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: this.token
            },
            body: JSON.stringify(data)
          }
        );
        const res = await response.json();
        if (!res.data) throw "暂无数据";
        return res.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async fetchUsersList() {
      try {
        const response = await fetch(
          `${this.baseUrl}/api/wework/users`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: this.token
            },
          }
        );
        const res = await response.json();
        if (!res.data) throw "暂无数据";
        return res.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async fetchStatusList() {
      try {
        const response = await fetch(
          `${this.baseUrl}/recognize/customer/followUserStatus`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: this.token
            },
          }
        );
        const res = await response.json();
        if (!res.data) throw "暂无数据";
        return res.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async updateTransfer(data) {
      try {
        const response = await fetch(
          `${this.baseUrl}/recognize/customer/transfer`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: this.token
            },
            body: JSON.stringify(data)
          }
        );
        const res = await response.json();
        return res;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
}
</script>

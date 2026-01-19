<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <Line type="monotone" dataKey="revenue" strokeWidth={3} />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
  </LineChart>
</ResponsiveContainer>

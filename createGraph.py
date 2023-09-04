import pandas as pd
import matplotlib.pyplot as plt
DIRECTORY = "test-plans/results/"
FILENAME = "aggregate-graph.csv"

df = pd.read_csv(DIRECTORY + FILENAME)

# cant use timestamp because values overflow, workaround with indexes
df['ordered'] = df['timeStamp'].rank(method='first')
print(df.columns.values)

# can plot 1 or more values
fig, ax = plt.subplots()

ax.plot(df['ordered'].values, df['sentBytes'].values, label='sentBytes')
#ax.plot(df['ordered'].values, df['bytes'].values)
ax.plot(df['ordered'].values, df['elapsed'].values, label='elapsed')
ax.plot(df['ordered'].values, df['Latency'].values, label='Latency')
ax.legend()
ax.plot(grid=True)
plt.show()
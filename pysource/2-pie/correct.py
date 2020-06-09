# %%
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('data.csv')
df.date = df.date.str.lower()
df = df.iloc[[1, 2, 0]].reset_index(drop = True)
df

# %%
sns.set_style('whitegrid')
g = sns.barplot(data = df, x = 'date', y = 'percentage')

plt.ylabel('Percentage')

ax = plt.axes()
x_axis = ax.axes.get_xaxis()
x_label = x_axis.get_label()
x_label.set_visible(False)
# plt.xlabel('Year')

for index, row in df.iterrows():
    g.text(row.name, row.percentage+0.5, str(row.percentage)+'%', color='black', ha="center")

plt.title('AMERICANS WHO HAVE TRIED MARIJUANA')
plt.savefig('correct.png', dpi = 150,
            bbox_inches = 'tight',
            transparent = True)

# %%

# %%
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('data.csv')
df

# %%
sns.set_style("whitegrid")
plt.suptitle('WE ARE ' + r"$\bf{" + 'LIVING' + "}$" + ' ' + r"$\bf{" + 'LONGER' + "}$" + '...', 
    y=1, x = 0.52, fontsize=18)
plt.title('Life expectancy at birth', fontsize=10)
g = sns.barplot(data = df, x = 'year', y = 'expectancy', palette = ['#1f77b4'])
plt.ylabel('Years')

ax = plt.axes()
x_axis = ax.axes.get_xaxis()
x_label = x_axis.get_label()
x_label.set_visible(False)
# plt.xlabel('Year')

for index, row in df.iterrows():
    g.text(row.name, row.expectancy+0.5, str(row.expectancy)+' yrs', color='black', ha="center")

plt.savefig('correct.png', dpi = 150,
            bbox_inches = 'tight',
            transparent = True)

# %%

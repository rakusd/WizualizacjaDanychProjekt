# %%
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('data.csv')
df

# %%
plt.figure(1, figsize=(5.5, 5))
sns.set_style('whitegrid')
plt.plot(df.year, df.deaths, c = 'w', lw = 4.5, zorder=1)
plt.plot(df.year, df.deaths, c = 'k', lw = 3, zorder=2)
plt.fill_between(df.year, df.deaths, color = '#8b0000',
    zorder = 0)
plt.scatter(df.year, df.deaths, c = 'k', s = 40, 
    edgecolors = 'white', zorder = 3)

plt.ylim(0, 1000)
plt.xlim(1989.5, 2012.5)
plt.grid(False, axis="x")
plt.grid(axis="y", color='black', alpha = 0.5)

ax = plt.gca()
ax.spines['left'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.spines['top'].set_color("black")
ax.spines['bottom'].set_color("black")

row = df.loc[df.year == 2005]
xx, yy = row.year, row.deaths

bbox = dict(boxstyle="round", fc="#8b0000", ec = 'w')
plt.annotate(r"$\bf{" + "2005" + "}$" + "\nFlorida enacted its\n 'Stand Your \nGround' law",
            (xx, yy), xytext=(-20, -60), color = 'w',
            textcoords='offset points', ha='left', 
            zorder = 5, bbox = bbox,
            arrowprops = {
                'arrowstyle': '-'
            })
            
row = df.loc[df.year == 1990]
xx, yy = row.year, row.deaths
bbox = dict(boxstyle="round", fc="#8b0000", ec = 'w')
plt.annotate(r"$\bf{" + str(int(yy)) + "}$",
            (xx, yy), xytext=(7.5, 4), color = 'k',
            textcoords='offset points', ha='center', 
            zorder = 5)
            
row = df.loc[df.year == 2012]
xx, yy = row.year, row.deaths
bbox = dict(boxstyle="round", fc="#8b0000", ec = 'w')
plt.annotate(r"$\bf{" + str(int(yy)) + "}$",
            (xx, yy), xytext=(-5.5, 4), color = 'k',
            textcoords='offset points', ha='center', 
            zorder = 5)

def to_bold(x):
    return r"$\bf{" + x + "}$"
plt.suptitle(' '.join([to_bold(x) for x in 'Gun deaths in Florida'.split(' ')]), 
    y=0.98, x = 0.51, fontsize=18)
plt.title('Number of murders commited using firearms', fontsize=10)

plt.savefig('correct.png', dpi = 150,
            bbox_inches = 'tight')

# %%
